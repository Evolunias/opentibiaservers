import WithDiscordNepreniaForumKeywordPage, { generateMetadata } from './with-discord-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaForumKeywordPage />;
}
