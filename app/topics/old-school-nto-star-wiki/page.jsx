import OldSchoolNtoStarWikiKeywordPage, { generateMetadata } from './old-school-nto-star-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarWikiKeywordPage />;
}
