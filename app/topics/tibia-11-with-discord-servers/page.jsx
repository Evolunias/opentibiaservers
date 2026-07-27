import Tibia11WithDiscordServersKeywordPage, { generateMetadata } from './tibia-11-with-discord-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordServersKeywordPage />;
}
