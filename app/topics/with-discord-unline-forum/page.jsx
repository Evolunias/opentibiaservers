import WithDiscordUnlineForumKeywordPage, { generateMetadata } from './with-discord-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineForumKeywordPage />;
}
