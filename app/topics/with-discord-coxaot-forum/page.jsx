import WithDiscordCoxaotForumKeywordPage, { generateMetadata } from './with-discord-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotForumKeywordPage />;
}
