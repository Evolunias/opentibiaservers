import FreshStartShadowcoresKeywordPage, { generateMetadata } from './fresh-start-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresKeywordPage />;
}
