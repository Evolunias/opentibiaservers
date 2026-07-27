import OldSchoolEvoluniaWikiKeywordPage, { generateMetadata } from './old-school-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaWikiKeywordPage />;
}
