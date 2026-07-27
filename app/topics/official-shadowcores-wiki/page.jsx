import OfficialShadowcoresWikiKeywordPage, { generateMetadata } from './official-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresWikiKeywordPage />;
}
