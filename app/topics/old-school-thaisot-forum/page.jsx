import OldSchoolThaisotForumKeywordPage, { generateMetadata } from './old-school-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotForumKeywordPage />;
}
