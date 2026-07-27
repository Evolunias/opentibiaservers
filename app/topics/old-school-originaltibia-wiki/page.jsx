import OldSchoolOriginaltibiaWikiKeywordPage, { generateMetadata } from './old-school-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOriginaltibiaWikiKeywordPage />;
}
