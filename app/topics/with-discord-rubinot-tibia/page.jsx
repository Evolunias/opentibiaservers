import WithDiscordRubinotTibiaKeywordPage, { generateMetadata } from './with-discord-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotTibiaKeywordPage />;
}
