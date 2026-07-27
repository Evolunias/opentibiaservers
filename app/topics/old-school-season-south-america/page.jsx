import OldSchoolSeasonSouthAmericaKeywordPage, { generateMetadata } from './old-school-season-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonSouthAmericaKeywordPage />;
}
