import WithDiscordNtoStarForumKeywordPage, { generateMetadata } from './with-discord-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarForumKeywordPage />;
}
