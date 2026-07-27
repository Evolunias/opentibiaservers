import WithDiscordOxygenotTibiaKeywordPage, { generateMetadata } from './with-discord-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOxygenotTibiaKeywordPage />;
}
