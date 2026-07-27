import VenoreotEuropeServerKeywordPage, { generateMetadata } from './venoreot-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotEuropeServerKeywordPage />;
}
