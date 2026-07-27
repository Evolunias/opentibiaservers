import OldSchoolNepreniaOfficialKeywordPage, { generateMetadata } from './old-school-neprenia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaOfficialKeywordPage />;
}
