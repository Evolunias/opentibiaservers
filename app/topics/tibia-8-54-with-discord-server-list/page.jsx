import Tibia854WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-8-54-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithDiscordServerListKeywordPage />;
}
