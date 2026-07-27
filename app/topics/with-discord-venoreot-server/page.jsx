import WithDiscordVenoreotServerKeywordPage, { generateMetadata } from './with-discord-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotServerKeywordPage />;
}
