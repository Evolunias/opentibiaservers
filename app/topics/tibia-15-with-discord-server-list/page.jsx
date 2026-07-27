import Tibia15WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-15-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordServerListKeywordPage />;
}
