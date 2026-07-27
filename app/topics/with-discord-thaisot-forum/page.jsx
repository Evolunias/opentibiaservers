import WithDiscordThaisotForumKeywordPage, { generateMetadata } from './with-discord-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotForumKeywordPage />;
}
