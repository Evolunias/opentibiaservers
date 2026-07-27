import Tibia86WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordServerListKeywordPage />;
}
