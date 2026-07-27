import NewSeasonArcaniarlDiscordKeywordPage, { generateMetadata } from './new-season-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlDiscordKeywordPage />;
}
