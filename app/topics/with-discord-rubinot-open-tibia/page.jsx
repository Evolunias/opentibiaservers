import WithDiscordRubinotOpenTibiaKeywordPage, { generateMetadata } from './with-discord-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotOpenTibiaKeywordPage />;
}
