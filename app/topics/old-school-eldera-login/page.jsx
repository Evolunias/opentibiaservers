import OldSchoolElderaLoginKeywordPage, { generateMetadata } from './old-school-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaLoginKeywordPage />;
}
