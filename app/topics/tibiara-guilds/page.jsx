import TibiaraGuildsKeywordPage, { generateMetadata } from './tibiara-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraGuildsKeywordPage />;
}
