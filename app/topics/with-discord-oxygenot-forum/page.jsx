import WithDiscordOxygenotForumKeywordPage, { generateMetadata } from './with-discord-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOxygenotForumKeywordPage />;
}
