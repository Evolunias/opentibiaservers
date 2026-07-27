import WithDiscordTibiascapeForumKeywordPage, { generateMetadata } from './with-discord-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeForumKeywordPage />;
}
