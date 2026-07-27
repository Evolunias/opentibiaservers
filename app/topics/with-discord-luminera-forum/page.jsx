import WithDiscordLumineraForumKeywordPage, { generateMetadata } from './with-discord-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraForumKeywordPage />;
}
