import WithDiscordVenoreotTibiaKeywordPage, { generateMetadata } from './with-discord-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotTibiaKeywordPage />;
}
