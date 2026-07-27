import Tibia13WithDiscordForumKeywordPage, { generateMetadata } from './tibia-13-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordForumKeywordPage />;
}
