import OldSchoolForumSouthAmericaKeywordPage, { generateMetadata } from './old-school-forum-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumSouthAmericaKeywordPage />;
}
