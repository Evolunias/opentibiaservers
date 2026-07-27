import Tibia71WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-7-1-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithDiscordServerListKeywordPage />;
}
