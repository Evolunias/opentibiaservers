import WithDiscordRubinotServerKeywordPage, { generateMetadata } from './with-discord-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotServerKeywordPage />;
}
