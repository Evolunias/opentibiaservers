import WithDiscordYurotsForumKeywordPage, { generateMetadata } from './with-discord-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsForumKeywordPage />;
}
