import VenoreotEuropeServersKeywordPage, { generateMetadata } from './venoreot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotEuropeServersKeywordPage />;
}
