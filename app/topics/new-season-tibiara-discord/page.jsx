import NewSeasonTibiaraDiscordKeywordPage, { generateMetadata } from './new-season-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraDiscordKeywordPage />;
}
