import WithDiscordXanteriaForumKeywordPage, { generateMetadata } from './with-discord-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaForumKeywordPage />;
}
