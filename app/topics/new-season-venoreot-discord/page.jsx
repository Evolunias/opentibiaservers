import NewSeasonVenoreotDiscordKeywordPage, { generateMetadata } from './new-season-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotDiscordKeywordPage />;
}
