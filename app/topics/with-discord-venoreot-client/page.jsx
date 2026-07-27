import WithDiscordVenoreotClientKeywordPage, { generateMetadata } from './with-discord-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotClientKeywordPage />;
}
