import OldSchoolTrashformersPrivateServerKeywordPage, { generateMetadata } from './old-school-trashformers-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersPrivateServerKeywordPage />;
}
