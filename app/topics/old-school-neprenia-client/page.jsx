import OldSchoolNepreniaClientKeywordPage, { generateMetadata } from './old-school-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaClientKeywordPage />;
}
