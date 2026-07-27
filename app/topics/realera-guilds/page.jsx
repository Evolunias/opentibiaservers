import RealeraGuildsKeywordPage, { generateMetadata } from './realera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraGuildsKeywordPage />;
}
