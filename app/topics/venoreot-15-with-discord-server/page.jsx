import Venoreot15WithDiscordServerKeywordPage, { generateMetadata } from './venoreot-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15WithDiscordServerKeywordPage />;
}
