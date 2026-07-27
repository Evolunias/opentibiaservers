import Tibia96WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-9-6-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithDiscordServerListKeywordPage />;
}
