import OldSchoolZuneraOtWikiKeywordPage, { generateMetadata } from './old-school-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtWikiKeywordPage />;
}
