import Tibia14WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-14-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordServerListKeywordPage />;
}
