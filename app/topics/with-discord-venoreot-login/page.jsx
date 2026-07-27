import WithDiscordVenoreotLoginKeywordPage, { generateMetadata } from './with-discord-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotLoginKeywordPage />;
}
