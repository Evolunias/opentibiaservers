import WithDiscordAmeriaForumKeywordPage, { generateMetadata } from './with-discord-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaForumKeywordPage />;
}
