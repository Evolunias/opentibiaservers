import MeneraGuildsKeywordPage, { generateMetadata } from './menera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraGuildsKeywordPage />;
}
