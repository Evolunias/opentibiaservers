import Tibia81WithDiscordForumKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordForumKeywordPage />;
}
