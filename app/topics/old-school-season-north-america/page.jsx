import OldSchoolSeasonNorthAmericaKeywordPage, { generateMetadata } from './old-school-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonNorthAmericaKeywordPage />;
}
