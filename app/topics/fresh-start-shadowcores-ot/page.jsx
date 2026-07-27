import FreshStartShadowcoresOtKeywordPage, { generateMetadata } from './fresh-start-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresOtKeywordPage />;
}
