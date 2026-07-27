import Alastera13WithDiscordServerKeywordPage, { generateMetadata } from './alastera-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13WithDiscordServerKeywordPage />;
}
