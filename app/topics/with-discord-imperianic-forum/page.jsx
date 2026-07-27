import WithDiscordImperianicForumKeywordPage, { generateMetadata } from './with-discord-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordImperianicForumKeywordPage />;
}
