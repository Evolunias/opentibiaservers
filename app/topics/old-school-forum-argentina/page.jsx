import OldSchoolForumArgentinaKeywordPage, { generateMetadata } from './old-school-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumArgentinaKeywordPage />;
}
