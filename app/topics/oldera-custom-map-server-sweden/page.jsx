import OlderaCustomMapServerSwedenKeywordPage, { generateMetadata } from './oldera-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaCustomMapServerSwedenKeywordPage />;
}
