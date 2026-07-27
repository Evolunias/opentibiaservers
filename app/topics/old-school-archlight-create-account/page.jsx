import OldSchoolArchlightCreateAccountKeywordPage, { generateMetadata } from './old-school-archlight-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightCreateAccountKeywordPage />;
}
