import OldSchoolSeasonSwedenKeywordPage, { generateMetadata } from './old-school-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonSwedenKeywordPage />;
}
