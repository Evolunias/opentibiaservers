import OldSchoolSeasonPolandKeywordPage, { generateMetadata } from './old-school-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonPolandKeywordPage />;
}
