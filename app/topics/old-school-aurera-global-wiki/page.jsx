import OldSchoolAureraGlobalWikiKeywordPage, { generateMetadata } from './old-school-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalWikiKeywordPage />;
}
