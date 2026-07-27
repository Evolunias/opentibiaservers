import WithDiscordVenoreotOpenTibiaKeywordPage, { generateMetadata } from './with-discord-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotOpenTibiaKeywordPage />;
}
