import Tibijka11WithDiscordServerKeywordPage, { generateMetadata } from './tibijka-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11WithDiscordServerKeywordPage />;
}
