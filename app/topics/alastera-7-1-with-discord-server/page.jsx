import Alastera71WithDiscordServerKeywordPage, { generateMetadata } from './alastera-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71WithDiscordServerKeywordPage />;
}
