import ShadowcoresWarsKeywordPage, { generateMetadata } from './shadowcores-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresWarsKeywordPage />;
}
