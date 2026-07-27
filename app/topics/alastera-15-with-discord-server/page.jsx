import Alastera15WithDiscordServerKeywordPage, { generateMetadata } from './alastera-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15WithDiscordServerKeywordPage />;
}
