import OldSchoolForumSwedenKeywordPage, { generateMetadata } from './old-school-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumSwedenKeywordPage />;
}
