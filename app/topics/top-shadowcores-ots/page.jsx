import TopShadowcoresOtsKeywordPage, { generateMetadata } from './top-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresOtsKeywordPage />;
}
