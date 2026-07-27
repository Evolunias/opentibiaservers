import OldSchoolSeasonMexicoKeywordPage, { generateMetadata } from './old-school-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonMexicoKeywordPage />;
}
