import WithDiscordOlderaForumKeywordPage, { generateMetadata } from './with-discord-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaForumKeywordPage />;
}
