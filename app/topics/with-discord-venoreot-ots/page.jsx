import WithDiscordVenoreotOtsKeywordPage, { generateMetadata } from './with-discord-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotOtsKeywordPage />;
}
