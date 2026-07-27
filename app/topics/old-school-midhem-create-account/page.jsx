import OldSchoolMidhemCreateAccountKeywordPage, { generateMetadata } from './old-school-midhem-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemCreateAccountKeywordPage />;
}
