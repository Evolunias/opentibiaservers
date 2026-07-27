import NewTrashformersOnlineKeywordPage, { generateMetadata } from './new-trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersOnlineKeywordPage />;
}
