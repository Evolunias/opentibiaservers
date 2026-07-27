import CustomTrashformersOnlineKeywordPage, { generateMetadata } from './custom-trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersOnlineKeywordPage />;
}
