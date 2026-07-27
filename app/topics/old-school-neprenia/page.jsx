import OldSchoolNepreniaKeywordPage, { generateMetadata } from './old-school-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaKeywordPage />;
}
