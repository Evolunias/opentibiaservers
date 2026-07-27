import LowrateVenoreotDiscordKeywordPage, { generateMetadata } from './lowrate-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotDiscordKeywordPage />;
}
