import BestShadowcoresKeywordPage, { generateMetadata } from './best-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresKeywordPage />;
}
