import Blazera15WithDiscordServerKeywordPage, { generateMetadata } from './blazera-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15WithDiscordServerKeywordPage />;
}
