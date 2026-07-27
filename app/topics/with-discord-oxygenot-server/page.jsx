import WithDiscordOxygenotServerKeywordPage, { generateMetadata } from './with-discord-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOxygenotServerKeywordPage />;
}
