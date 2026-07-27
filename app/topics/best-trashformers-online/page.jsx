import BestTrashformersOnlineKeywordPage, { generateMetadata } from './best-trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersOnlineKeywordPage />;
}
