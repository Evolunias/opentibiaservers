import PopularShadowcoresOtsKeywordPage, { generateMetadata } from './popular-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresOtsKeywordPage />;
}
