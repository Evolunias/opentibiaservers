import OldSchoolSeasonUkKeywordPage, { generateMetadata } from './old-school-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonUkKeywordPage />;
}
