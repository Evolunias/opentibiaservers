import Tibia76WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordServerListKeywordPage />;
}
