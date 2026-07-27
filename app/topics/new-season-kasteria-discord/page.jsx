import NewSeasonKasteriaDiscordKeywordPage, { generateMetadata } from './new-season-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaDiscordKeywordPage />;
}
