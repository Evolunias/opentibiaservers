import OldSchoolTrashformersOtServerKeywordPage, { generateMetadata } from './old-school-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersOtServerKeywordPage />;
}
