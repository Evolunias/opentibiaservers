import OldSchoolArchlightForumKeywordPage, { generateMetadata } from './old-school-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightForumKeywordPage />;
}
