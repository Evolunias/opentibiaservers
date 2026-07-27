import VenoreotPolandServersKeywordPage, { generateMetadata } from './venoreot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPolandServersKeywordPage />;
}
