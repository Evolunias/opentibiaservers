import OldSchoolNepreniaLoginKeywordPage, { generateMetadata } from './old-school-neprenia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaLoginKeywordPage />;
}
