import OldSchoolSeasonUsaKeywordPage, { generateMetadata } from './old-school-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSeasonUsaKeywordPage />;
}
