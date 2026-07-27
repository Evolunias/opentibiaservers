import PopularTrashformersOnlineKeywordPage, { generateMetadata } from './popular-trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersOnlineKeywordPage />;
}
