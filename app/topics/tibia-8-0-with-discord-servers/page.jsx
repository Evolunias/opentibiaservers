import Tibia80WithDiscordServersKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordServersKeywordPage />;
}
