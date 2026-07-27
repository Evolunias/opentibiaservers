import OldSchoolRubinotWikiKeywordPage, { generateMetadata } from './old-school-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotWikiKeywordPage />;
}
