import OldSchoolNepreniaGuideKeywordPage, { generateMetadata } from './old-school-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaGuideKeywordPage />;
}
