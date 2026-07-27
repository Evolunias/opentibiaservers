import OldSchoolSaintsotForumKeywordPage, { generateMetadata } from './old-school-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotForumKeywordPage />;
}
