import NewSeasonCarlinotDiscordKeywordPage, { generateMetadata } from './new-season-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotDiscordKeywordPage />;
}
