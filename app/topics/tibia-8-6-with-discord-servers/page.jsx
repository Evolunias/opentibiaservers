import Tibia86WithDiscordServersKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordServersKeywordPage />;
}
