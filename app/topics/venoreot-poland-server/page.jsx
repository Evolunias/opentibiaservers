import VenoreotPolandServerKeywordPage, { generateMetadata } from './venoreot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPolandServerKeywordPage />;
}
