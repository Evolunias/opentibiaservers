import OldSchoolMarolaotForumKeywordPage, { generateMetadata } from './old-school-marolaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotForumKeywordPage />;
}
