import NewSeasonArchlightDiscordKeywordPage, { generateMetadata } from './new-season-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightDiscordKeywordPage />;
}
