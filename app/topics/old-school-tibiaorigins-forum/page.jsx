import OldSchoolTibiaoriginsForumKeywordPage, { generateMetadata } from './old-school-tibiaorigins-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsForumKeywordPage />;
}
