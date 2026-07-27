import VenoreotArgentinaServersKeywordPage, { generateMetadata } from './venoreot-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotArgentinaServersKeywordPage />;
}
