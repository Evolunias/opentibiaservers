import NewTrashformersDiscordKeywordPage, { generateMetadata } from './new-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersDiscordKeywordPage />;
}
