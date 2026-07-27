import VenoreotBrazilServersKeywordPage, { generateMetadata } from './venoreot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotBrazilServersKeywordPage />;
}
