import OlderaCustomMapServersMexicoKeywordPage, { generateMetadata } from './oldera-custom-map-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaCustomMapServersMexicoKeywordPage />;
}
