import OldSchoolForumUsaKeywordPage, { generateMetadata } from './old-school-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumUsaKeywordPage />;
}
