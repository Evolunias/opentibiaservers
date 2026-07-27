import TopShadowcoresOtKeywordPage, { generateMetadata } from './top-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresOtKeywordPage />;
}
