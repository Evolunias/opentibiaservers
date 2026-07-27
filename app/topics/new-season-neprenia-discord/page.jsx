import NewSeasonNepreniaDiscordKeywordPage, { generateMetadata } from './new-season-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaDiscordKeywordPage />;
}
