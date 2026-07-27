import WithDiscordCanobForumKeywordPage, { generateMetadata } from './with-discord-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobForumKeywordPage />;
}
