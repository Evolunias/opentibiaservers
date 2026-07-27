import ShadowcoresEuropeServerKeywordPage, { generateMetadata } from './shadowcores-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresEuropeServerKeywordPage />;
}
