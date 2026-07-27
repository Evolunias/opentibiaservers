import OldSchoolNepreniaOtKeywordPage, { generateMetadata } from './old-school-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaOtKeywordPage />;
}
