import OldSchoolOlderaCreateAccountKeywordPage, { generateMetadata } from './old-school-oldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaCreateAccountKeywordPage />;
}
