import OldSchoolEvoleraForumKeywordPage, { generateMetadata } from './old-school-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraForumKeywordPage />;
}
