import OldSchoolYurotsForumKeywordPage, { generateMetadata } from './old-school-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsForumKeywordPage />;
}
