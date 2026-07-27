import FreshStartShadowcoresWebsiteKeywordPage, { generateMetadata } from './fresh-start-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresWebsiteKeywordPage />;
}
