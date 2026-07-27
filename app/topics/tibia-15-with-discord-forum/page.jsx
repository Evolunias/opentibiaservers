import Tibia15WithDiscordForumKeywordPage, { generateMetadata } from './tibia-15-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordForumKeywordPage />;
}
