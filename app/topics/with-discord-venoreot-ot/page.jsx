import WithDiscordVenoreotOtKeywordPage, { generateMetadata } from './with-discord-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotOtKeywordPage />;
}
