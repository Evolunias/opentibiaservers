import WithDiscordTrashformersForumKeywordPage, { generateMetadata } from './with-discord-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersForumKeywordPage />;
}
