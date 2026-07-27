import ShadowcoresPolandServerKeywordPage, { generateMetadata } from './shadowcores-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresPolandServerKeywordPage />;
}
