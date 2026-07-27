import VenoreotBrazilServerKeywordPage, { generateMetadata } from './venoreot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotBrazilServerKeywordPage />;
}
