import VenoreotWarsKeywordPage, { generateMetadata } from './venoreot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWarsKeywordPage />;
}
