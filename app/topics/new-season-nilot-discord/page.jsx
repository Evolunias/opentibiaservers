import NewSeasonNilotDiscordKeywordPage, { generateMetadata } from './new-season-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotDiscordKeywordPage />;
}
