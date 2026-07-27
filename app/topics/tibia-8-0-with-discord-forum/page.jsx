import Tibia80WithDiscordForumKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordForumKeywordPage />;
}
