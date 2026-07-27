import WithDiscordNostaltherForumKeywordPage, { generateMetadata } from './with-discord-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherForumKeywordPage />;
}
