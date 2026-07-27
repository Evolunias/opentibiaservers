import WithDiscordRealestaForumKeywordPage, { generateMetadata } from './with-discord-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaForumKeywordPage />;
}
