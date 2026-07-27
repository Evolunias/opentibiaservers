import OldSchoolShadowcoresWikiKeywordPage, { generateMetadata } from './old-school-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresWikiKeywordPage />;
}
