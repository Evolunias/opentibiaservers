import OldSchoolCarlinotForumKeywordPage, { generateMetadata } from './old-school-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotForumKeywordPage />;
}
