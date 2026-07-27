import OldSchoolAmeriaForumKeywordPage, { generateMetadata } from './old-school-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaForumKeywordPage />;
}
