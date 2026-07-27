import OldSchoolUnlineForumKeywordPage, { generateMetadata } from './old-school-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineForumKeywordPage />;
}
