import TrashformersOnlineKeywordPage, { generateMetadata } from './trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersOnlineKeywordPage />;
}
