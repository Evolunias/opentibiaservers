import OldSchoolArchlightLoginKeywordPage, { generateMetadata } from './old-school-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightLoginKeywordPage />;
}
