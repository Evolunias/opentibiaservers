import ShadowcoresEuropeServersKeywordPage, { generateMetadata } from './shadowcores-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresEuropeServersKeywordPage />;
}
