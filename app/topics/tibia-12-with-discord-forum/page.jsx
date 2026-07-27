import Tibia12WithDiscordForumKeywordPage, { generateMetadata } from './tibia-12-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordForumKeywordPage />;
}
