import MidhemCustomMapServersMexicoKeywordPage, { generateMetadata } from './midhem-custom-map-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemCustomMapServersMexicoKeywordPage />;
}
