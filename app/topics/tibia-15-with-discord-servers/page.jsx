import Tibia15WithDiscordServersKeywordPage, { generateMetadata } from './tibia-15-with-discord-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordServersKeywordPage />;
}
