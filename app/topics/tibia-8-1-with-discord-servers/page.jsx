import Tibia81WithDiscordServersKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordServersKeywordPage />;
}
