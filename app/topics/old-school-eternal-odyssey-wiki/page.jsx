import OldSchoolEternalOdysseyWikiKeywordPage, { generateMetadata } from './old-school-eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEternalOdysseyWikiKeywordPage />;
}
