import BestShadowcoresWikiKeywordPage, { generateMetadata } from './best-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresWikiKeywordPage />;
}
