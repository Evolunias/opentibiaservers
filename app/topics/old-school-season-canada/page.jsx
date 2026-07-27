import OldSchoolSeasonCanadaKeywordPage, { generateMetadata } from './old-school-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonCanadaKeywordPage />;
}
