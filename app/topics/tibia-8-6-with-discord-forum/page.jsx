import Tibia86WithDiscordForumKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordForumKeywordPage />;
}
