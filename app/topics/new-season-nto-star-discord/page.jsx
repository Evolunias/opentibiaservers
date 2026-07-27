import NewSeasonNtoStarDiscordKeywordPage, { generateMetadata } from './new-season-nto-star-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarDiscordKeywordPage />;
}
