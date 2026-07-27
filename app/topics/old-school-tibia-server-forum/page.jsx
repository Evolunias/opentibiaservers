import OldSchoolTibiaServerForumKeywordPage, { generateMetadata } from './old-school-tibia-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerForumKeywordPage />;
}
