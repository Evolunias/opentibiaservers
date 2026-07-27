import WithDiscordMiracleForumKeywordPage, { generateMetadata } from './with-discord-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleForumKeywordPage />;
}
