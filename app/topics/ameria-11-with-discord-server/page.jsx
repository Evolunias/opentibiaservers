import Ameria11WithDiscordServerKeywordPage, { generateMetadata } from './ameria-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11WithDiscordServerKeywordPage />;
}
