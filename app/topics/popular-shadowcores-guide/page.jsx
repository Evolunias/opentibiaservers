import PopularShadowcoresGuideKeywordPage, { generateMetadata } from './popular-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresGuideKeywordPage />;
}
