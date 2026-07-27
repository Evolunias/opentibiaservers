import OldSchoolOxygenotForumKeywordPage, { generateMetadata } from './old-school-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotForumKeywordPage />;
}
