import WithDiscordElderaForumKeywordPage, { generateMetadata } from './with-discord-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaForumKeywordPage />;
}
