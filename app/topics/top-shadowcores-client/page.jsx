import TopShadowcoresClientKeywordPage, { generateMetadata } from './top-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresClientKeywordPage />;
}
