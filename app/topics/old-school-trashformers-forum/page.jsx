import OldSchoolTrashformersForumKeywordPage, { generateMetadata } from './old-school-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersForumKeywordPage />;
}
