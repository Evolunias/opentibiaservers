import Alastera12WithDiscordServerKeywordPage, { generateMetadata } from './alastera-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12WithDiscordServerKeywordPage />;
}
