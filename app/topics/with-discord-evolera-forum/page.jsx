import WithDiscordEvoleraForumKeywordPage, { generateMetadata } from './with-discord-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraForumKeywordPage />;
}
