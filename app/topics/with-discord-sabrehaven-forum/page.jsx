import WithDiscordSabrehavenForumKeywordPage, { generateMetadata } from './with-discord-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenForumKeywordPage />;
}
