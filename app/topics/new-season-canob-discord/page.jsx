import NewSeasonCanobDiscordKeywordPage, { generateMetadata } from './new-season-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobDiscordKeywordPage />;
}
