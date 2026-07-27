import VenoreotArgentinaServerKeywordPage, { generateMetadata } from './venoreot-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotArgentinaServerKeywordPage />;
}
