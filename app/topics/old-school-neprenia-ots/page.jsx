import OldSchoolNepreniaOtsKeywordPage, { generateMetadata } from './old-school-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaOtsKeywordPage />;
}
