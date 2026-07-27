import Thaisot15WithDiscordServerKeywordPage, { generateMetadata } from './thaisot-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15WithDiscordServerKeywordPage />;
}
