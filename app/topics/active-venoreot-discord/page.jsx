import ActiveVenoreotDiscordKeywordPage, { generateMetadata } from './active-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotDiscordKeywordPage />;
}
