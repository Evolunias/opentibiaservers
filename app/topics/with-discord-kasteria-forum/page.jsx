import WithDiscordKasteriaForumKeywordPage, { generateMetadata } from './with-discord-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaForumKeywordPage />;
}
