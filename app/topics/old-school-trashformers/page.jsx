import OldSchoolTrashformersKeywordPage, { generateMetadata } from './old-school-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersKeywordPage />;
}
