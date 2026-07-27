import WithDiscordDuraOnlineForumKeywordPage, { generateMetadata } from './with-discord-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineForumKeywordPage />;
}
