import OldSchoolForumCanadaKeywordPage, { generateMetadata } from './old-school-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumCanadaKeywordPage />;
}
