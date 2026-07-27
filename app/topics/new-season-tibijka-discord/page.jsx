import NewSeasonTibijkaDiscordKeywordPage, { generateMetadata } from './new-season-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaDiscordKeywordPage />;
}
