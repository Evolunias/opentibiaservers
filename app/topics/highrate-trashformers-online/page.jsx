import HighrateTrashformersOnlineKeywordPage, { generateMetadata } from './highrate-trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersOnlineKeywordPage />;
}
