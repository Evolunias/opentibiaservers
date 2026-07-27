import ShadowcoresOtKeywordPage, { generateMetadata } from './shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresOtKeywordPage />;
}
