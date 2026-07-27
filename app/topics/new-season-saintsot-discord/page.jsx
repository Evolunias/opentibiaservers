import NewSeasonSaintsotDiscordKeywordPage, { generateMetadata } from './new-season-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotDiscordKeywordPage />;
}
