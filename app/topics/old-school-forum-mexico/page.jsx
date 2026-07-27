import OldSchoolForumMexicoKeywordPage, { generateMetadata } from './old-school-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumMexicoKeywordPage />;
}
