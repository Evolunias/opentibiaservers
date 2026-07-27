import WithDiscordNilotForumKeywordPage, { generateMetadata } from './with-discord-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotForumKeywordPage />;
}
