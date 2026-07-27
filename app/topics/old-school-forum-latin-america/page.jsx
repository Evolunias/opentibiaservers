import OldSchoolForumLatinAmericaKeywordPage, { generateMetadata } from './old-school-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumLatinAmericaKeywordPage />;
}
