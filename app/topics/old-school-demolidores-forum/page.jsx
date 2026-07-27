import OldSchoolDemolidoresForumKeywordPage, { generateMetadata } from './old-school-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresForumKeywordPage />;
}
