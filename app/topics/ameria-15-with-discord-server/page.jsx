import Ameria15WithDiscordServerKeywordPage, { generateMetadata } from './ameria-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15WithDiscordServerKeywordPage />;
}
