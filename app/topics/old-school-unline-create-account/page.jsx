import OldSchoolUnlineCreateAccountKeywordPage, { generateMetadata } from './old-school-unline-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineCreateAccountKeywordPage />;
}
