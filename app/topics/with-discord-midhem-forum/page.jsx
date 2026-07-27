import WithDiscordMidhemForumKeywordPage, { generateMetadata } from './with-discord-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemForumKeywordPage />;
}
