import NewSeasonRealestaDiscordKeywordPage, { generateMetadata } from './new-season-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaDiscordKeywordPage />;
}
