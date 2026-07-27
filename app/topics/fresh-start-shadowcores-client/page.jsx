import FreshStartShadowcoresClientKeywordPage, { generateMetadata } from './fresh-start-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresClientKeywordPage />;
}
