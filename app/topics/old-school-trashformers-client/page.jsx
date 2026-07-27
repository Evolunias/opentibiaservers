import OldSchoolTrashformersClientKeywordPage, { generateMetadata } from './old-school-trashformers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersClientKeywordPage />;
}
