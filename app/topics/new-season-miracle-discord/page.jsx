import NewSeasonMiracleDiscordKeywordPage, { generateMetadata } from './new-season-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleDiscordKeywordPage />;
}
