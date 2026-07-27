import BestShadowcoresOtsKeywordPage, { generateMetadata } from './best-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresOtsKeywordPage />;
}
