import WithDiscordSerenityForumKeywordPage, { generateMetadata } from './with-discord-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityForumKeywordPage />;
}
