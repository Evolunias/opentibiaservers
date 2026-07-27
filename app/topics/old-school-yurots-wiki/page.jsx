import OldSchoolYurotsWikiKeywordPage, { generateMetadata } from './old-school-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsWikiKeywordPage />;
}
