import OlderaCustomMapServerMexicoKeywordPage, { generateMetadata } from './oldera-custom-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaCustomMapServerMexicoKeywordPage />;
}
