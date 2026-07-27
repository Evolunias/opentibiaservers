import OldSchoolRealestaForumKeywordPage, { generateMetadata } from './old-school-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaForumKeywordPage />;
}
