import WithDiscordClassicusForumKeywordPage, { generateMetadata } from './with-discord-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusForumKeywordPage />;
}
