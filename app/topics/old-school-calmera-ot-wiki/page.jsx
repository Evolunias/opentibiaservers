import OldSchoolCalmeraOtWikiKeywordPage, { generateMetadata } from './old-school-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtWikiKeywordPage />;
}
