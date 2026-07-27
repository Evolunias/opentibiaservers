import BestShadowcoresWebsiteKeywordPage, { generateMetadata } from './best-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresWebsiteKeywordPage />;
}
