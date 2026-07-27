import ShadowcoresOtsKeywordPage, { generateMetadata } from './shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresOtsKeywordPage />;
}
