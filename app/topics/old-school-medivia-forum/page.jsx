import OldSchoolMediviaForumKeywordPage, { generateMetadata } from './old-school-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaForumKeywordPage />;
}
