import Tibia12WithDiscordServersKeywordPage, { generateMetadata } from './tibia-12-with-discord-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordServersKeywordPage />;
}
