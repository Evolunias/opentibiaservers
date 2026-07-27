import Tibia71WithDiscordServersKeywordPage, { generateMetadata } from './tibia-7-1-with-discord-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithDiscordServersKeywordPage />;
}
