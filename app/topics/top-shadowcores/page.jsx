import TopShadowcoresKeywordPage, { generateMetadata } from './top-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresKeywordPage />;
}
