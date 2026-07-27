import OldSchoolNepreniaOtServerKeywordPage, { generateMetadata } from './old-school-neprenia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaOtServerKeywordPage />;
}
