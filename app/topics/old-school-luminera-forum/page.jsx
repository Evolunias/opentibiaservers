import OldSchoolLumineraForumKeywordPage, { generateMetadata } from './old-school-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraForumKeywordPage />;
}
