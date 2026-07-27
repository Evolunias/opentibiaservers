import Tibia14WithDiscordServersKeywordPage, { generateMetadata } from './tibia-14-with-discord-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordServersKeywordPage />;
}
