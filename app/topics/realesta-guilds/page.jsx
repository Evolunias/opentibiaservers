import RealestaGuildsKeywordPage, { generateMetadata } from './realesta-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaGuildsKeywordPage />;
}
