import FreshStartShadowcoresLoginKeywordPage, { generateMetadata } from './fresh-start-shadowcores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresLoginKeywordPage />;
}
