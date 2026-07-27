import ActiveTrashformersOnlineKeywordPage, { generateMetadata } from './active-trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersOnlineKeywordPage />;
}
