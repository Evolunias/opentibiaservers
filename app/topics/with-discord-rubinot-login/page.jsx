import WithDiscordRubinotLoginKeywordPage, { generateMetadata } from './with-discord-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotLoginKeywordPage />;
}
