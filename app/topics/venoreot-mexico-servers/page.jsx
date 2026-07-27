import VenoreotMexicoServersKeywordPage, { generateMetadata } from './venoreot-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotMexicoServersKeywordPage />;
}
