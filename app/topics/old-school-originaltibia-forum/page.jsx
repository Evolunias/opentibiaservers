import OldSchoolOriginaltibiaForumKeywordPage, { generateMetadata } from './old-school-originaltibia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOriginaltibiaForumKeywordPage />;
}
