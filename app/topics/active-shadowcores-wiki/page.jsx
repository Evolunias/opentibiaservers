import ActiveShadowcoresWikiKeywordPage, { generateMetadata } from './active-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresWikiKeywordPage />;
}
