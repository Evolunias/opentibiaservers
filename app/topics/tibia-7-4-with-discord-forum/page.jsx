import Tibia74WithDiscordForumKeywordPage, { generateMetadata } from './tibia-7-4-with-discord-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithDiscordForumKeywordPage />;
}
