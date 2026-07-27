import OldSchoolEvoleraLoginKeywordPage, { generateMetadata } from './old-school-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraLoginKeywordPage />;
}
