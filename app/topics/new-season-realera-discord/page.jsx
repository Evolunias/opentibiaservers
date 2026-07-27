import NewSeasonRealeraDiscordKeywordPage, { generateMetadata } from './new-season-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraDiscordKeywordPage />;
}
