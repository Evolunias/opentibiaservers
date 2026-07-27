import FreshStartShadowcoresServerKeywordPage, { generateMetadata } from './fresh-start-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresServerKeywordPage />;
}
