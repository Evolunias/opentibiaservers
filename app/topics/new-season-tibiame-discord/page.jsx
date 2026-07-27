import NewSeasonTibiameDiscordKeywordPage, { generateMetadata } from './new-season-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameDiscordKeywordPage />;
}
