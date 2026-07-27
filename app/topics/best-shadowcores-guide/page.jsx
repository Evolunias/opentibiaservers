import BestShadowcoresGuideKeywordPage, { generateMetadata } from './best-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresGuideKeywordPage />;
}
