import OldSchoolSeasonLatinAmericaKeywordPage, { generateMetadata } from './old-school-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonLatinAmericaKeywordPage />;
}
