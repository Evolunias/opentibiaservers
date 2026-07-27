import OldSchoolKasteriaForumKeywordPage, { generateMetadata } from './old-school-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaForumKeywordPage />;
}
