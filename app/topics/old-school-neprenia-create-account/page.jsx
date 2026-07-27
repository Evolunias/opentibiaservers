import OldSchoolNepreniaCreateAccountKeywordPage, { generateMetadata } from './old-school-neprenia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaCreateAccountKeywordPage />;
}
