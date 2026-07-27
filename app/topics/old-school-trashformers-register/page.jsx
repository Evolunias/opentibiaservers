import OldSchoolTrashformersRegisterKeywordPage, { generateMetadata } from './old-school-trashformers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersRegisterKeywordPage />;
}
