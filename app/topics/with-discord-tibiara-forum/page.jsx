import WithDiscordTibiaraForumKeywordPage, { generateMetadata } from './with-discord-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraForumKeywordPage />;
}
