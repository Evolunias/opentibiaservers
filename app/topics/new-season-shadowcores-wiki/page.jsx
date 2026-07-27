import NewSeasonShadowcoresWikiKeywordPage, { generateMetadata } from './new-season-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresWikiKeywordPage />;
}
