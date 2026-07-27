import TopShadowcoresWebsiteKeywordPage, { generateMetadata } from './top-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresWebsiteKeywordPage />;
}
