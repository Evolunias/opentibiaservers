import OldSchoolDuraOnlineForumKeywordPage, { generateMetadata } from './old-school-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineForumKeywordPage />;
}
