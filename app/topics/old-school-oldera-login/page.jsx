import OldSchoolOlderaLoginKeywordPage, { generateMetadata } from './old-school-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaLoginKeywordPage />;
}
