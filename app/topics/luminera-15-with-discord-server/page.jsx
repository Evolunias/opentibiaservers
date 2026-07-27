import Luminera15WithDiscordServerKeywordPage, { generateMetadata } from './luminera-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15WithDiscordServerKeywordPage />;
}
