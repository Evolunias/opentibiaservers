import OldSchoolArcaniarlWikiKeywordPage, { generateMetadata } from './old-school-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlWikiKeywordPage />;
}
