import WithDiscordVenoreotOtServerKeywordPage, { generateMetadata } from './with-discord-venoreot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotOtServerKeywordPage />;
}
