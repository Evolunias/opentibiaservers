import PopularShadowcoresOtKeywordPage, { generateMetadata } from './popular-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresOtKeywordPage />;
}
