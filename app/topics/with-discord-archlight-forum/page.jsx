import WithDiscordArchlightForumKeywordPage, { generateMetadata } from './with-discord-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightForumKeywordPage />;
}
