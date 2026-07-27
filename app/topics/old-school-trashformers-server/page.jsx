import OldSchoolTrashformersServerKeywordPage, { generateMetadata } from './old-school-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersServerKeywordPage />;
}
