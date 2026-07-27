import OldSchoolNepreniaForumKeywordPage, { generateMetadata } from './old-school-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaForumKeywordPage />;
}
