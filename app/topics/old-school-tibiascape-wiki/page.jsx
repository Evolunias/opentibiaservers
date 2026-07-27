import OldSchoolTibiascapeWikiKeywordPage, { generateMetadata } from './old-school-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeWikiKeywordPage />;
}
