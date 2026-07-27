import WithDiscordAlasteraForumKeywordPage, { generateMetadata } from './with-discord-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraForumKeywordPage />;
}
