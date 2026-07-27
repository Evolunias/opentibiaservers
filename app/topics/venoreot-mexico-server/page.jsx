import VenoreotMexicoServerKeywordPage, { generateMetadata } from './venoreot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotMexicoServerKeywordPage />;
}
