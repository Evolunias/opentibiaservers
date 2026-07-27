import Tibia12WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-12-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordServerListKeywordPage />;
}
