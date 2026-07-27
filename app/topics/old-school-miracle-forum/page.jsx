import OldSchoolMiracleForumKeywordPage, { generateMetadata } from './old-school-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleForumKeywordPage />;
}
