import PopularShadowcoresWikiKeywordPage, { generateMetadata } from './popular-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresWikiKeywordPage />;
}
