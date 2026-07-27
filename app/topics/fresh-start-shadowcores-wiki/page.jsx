import FreshStartShadowcoresWikiKeywordPage, { generateMetadata } from './fresh-start-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresWikiKeywordPage />;
}
