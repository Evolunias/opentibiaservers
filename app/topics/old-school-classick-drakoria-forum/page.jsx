import OldSchoolClassickDrakoriaForumKeywordPage, { generateMetadata } from './old-school-classick-drakoria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaForumKeywordPage />;
}
