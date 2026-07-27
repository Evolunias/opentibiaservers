import OldSchoolMidhemForumKeywordPage, { generateMetadata } from './old-school-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemForumKeywordPage />;
}
