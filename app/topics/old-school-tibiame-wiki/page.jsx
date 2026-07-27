import OldSchoolTibiameWikiKeywordPage, { generateMetadata } from './old-school-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameWikiKeywordPage />;
}
