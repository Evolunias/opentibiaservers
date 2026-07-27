import Tibia76WithDiscordForumKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordForumKeywordPage />;
}
