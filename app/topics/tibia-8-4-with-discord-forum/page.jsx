import Tibia84WithDiscordForumKeywordPage, { generateMetadata } from './tibia-8-4-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithDiscordForumKeywordPage />;
}
