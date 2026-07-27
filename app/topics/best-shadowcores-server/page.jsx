import BestShadowcoresServerKeywordPage, { generateMetadata } from './best-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresServerKeywordPage />;
}
