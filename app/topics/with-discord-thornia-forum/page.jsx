import WithDiscordThorniaForumKeywordPage, { generateMetadata } from './with-discord-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaForumKeywordPage />;
}
