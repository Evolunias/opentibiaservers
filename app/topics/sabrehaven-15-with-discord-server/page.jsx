import Sabrehaven15WithDiscordServerKeywordPage, { generateMetadata } from './sabrehaven-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15WithDiscordServerKeywordPage />;
}
