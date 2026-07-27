import WithDiscordYurotsServerKeywordPage, { generateMetadata } from './with-discord-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsServerKeywordPage />;
}
