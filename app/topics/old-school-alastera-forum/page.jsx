import OldSchoolAlasteraForumKeywordPage, { generateMetadata } from './old-school-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraForumKeywordPage />;
}
