import OldSchoolTrashformersOtsKeywordPage, { generateMetadata } from './old-school-trashformers-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersOtsKeywordPage />;
}
