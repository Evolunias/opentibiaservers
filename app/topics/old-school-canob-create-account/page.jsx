import OldSchoolCanobCreateAccountKeywordPage, { generateMetadata } from './old-school-canob-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobCreateAccountKeywordPage />;
}
