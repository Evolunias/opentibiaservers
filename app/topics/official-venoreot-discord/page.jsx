import OfficialVenoreotDiscordKeywordPage, { generateMetadata } from './official-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotDiscordKeywordPage />;
}
