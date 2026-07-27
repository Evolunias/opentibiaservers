import TopTrashformersOnlineKeywordPage, { generateMetadata } from './top-trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersOnlineKeywordPage />;
}
