import Thornia84WithDiscordServerKeywordPage, { generateMetadata } from './thornia-8-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84WithDiscordServerKeywordPage />;
}
