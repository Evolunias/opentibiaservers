import Tibia13WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-13-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordServerListKeywordPage />;
}
