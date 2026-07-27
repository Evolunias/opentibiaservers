import OldSchoolRealeraLoginKeywordPage, { generateMetadata } from './old-school-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraLoginKeywordPage />;
}
