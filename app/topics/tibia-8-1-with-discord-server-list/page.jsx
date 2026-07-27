import Tibia81WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordServerListKeywordPage />;
}
