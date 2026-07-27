import OldSchoolKasteriaCreateAccountKeywordPage, { generateMetadata } from './old-school-kasteria-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaCreateAccountKeywordPage />;
}
