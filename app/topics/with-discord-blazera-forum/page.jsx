import WithDiscordBlazeraForumKeywordPage, { generateMetadata } from './with-discord-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraForumKeywordPage />;
}
