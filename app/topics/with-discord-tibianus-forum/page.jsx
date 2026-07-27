import WithDiscordTibianusForumKeywordPage, { generateMetadata } from './with-discord-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusForumKeywordPage />;
}
