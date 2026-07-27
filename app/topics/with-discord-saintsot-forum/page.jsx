import WithDiscordSaintsotForumKeywordPage, { generateMetadata } from './with-discord-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotForumKeywordPage />;
}
