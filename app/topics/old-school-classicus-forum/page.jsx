import OldSchoolClassicusForumKeywordPage, { generateMetadata } from './old-school-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusForumKeywordPage />;
}
