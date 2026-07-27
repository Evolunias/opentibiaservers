import Tibia11WithDiscordForumKeywordPage, { generateMetadata } from './tibia-11-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordForumKeywordPage />;
}
