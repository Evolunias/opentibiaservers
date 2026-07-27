import OldSchoolForumGermanyKeywordPage, { generateMetadata } from './old-school-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumGermanyKeywordPage />;
}
