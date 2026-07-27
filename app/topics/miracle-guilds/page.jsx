import MiracleGuildsKeywordPage, { generateMetadata } from './miracle-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleGuildsKeywordPage />;
}
