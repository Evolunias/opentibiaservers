import Thornia11WithDiscordServerKeywordPage, { generateMetadata } from './thornia-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11WithDiscordServerKeywordPage />;
}
