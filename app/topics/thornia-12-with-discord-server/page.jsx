import Thornia12WithDiscordServerKeywordPage, { generateMetadata } from './thornia-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12WithDiscordServerKeywordPage />;
}
