import OldSchoolSeasonFranceKeywordPage, { generateMetadata } from './old-school-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonFranceKeywordPage />;
}
