import Alastera11WithDiscordServerKeywordPage, { generateMetadata } from './alastera-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11WithDiscordServerKeywordPage />;
}
