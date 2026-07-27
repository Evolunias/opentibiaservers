import OldSchoolTrashformersOnlineKeywordPage, { generateMetadata } from './old-school-trashformers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersOnlineKeywordPage />;
}
