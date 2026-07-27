import OldSchoolTibiaraForumKeywordPage, { generateMetadata } from './old-school-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraForumKeywordPage />;
}
