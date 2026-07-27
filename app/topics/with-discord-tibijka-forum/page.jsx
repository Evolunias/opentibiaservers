import WithDiscordTibijkaForumKeywordPage, { generateMetadata } from './with-discord-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaForumKeywordPage />;
}
