import ShadowcoresKeywordPage, { generateMetadata } from './shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresKeywordPage />;
}
