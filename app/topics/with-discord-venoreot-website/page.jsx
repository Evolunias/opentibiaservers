import WithDiscordVenoreotWebsiteKeywordPage, { generateMetadata } from './with-discord-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotWebsiteKeywordPage />;
}
