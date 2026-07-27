import OldSchoolCyntaraForumKeywordPage, { generateMetadata } from './old-school-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraForumKeywordPage />;
}
