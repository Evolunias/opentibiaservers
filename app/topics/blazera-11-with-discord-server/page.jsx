import Blazera11WithDiscordServerKeywordPage, { generateMetadata } from './blazera-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11WithDiscordServerKeywordPage />;
}
