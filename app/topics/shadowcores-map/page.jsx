import ShadowcoresMapKeywordPage, { generateMetadata } from './shadowcores-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresMapKeywordPage />;
}
