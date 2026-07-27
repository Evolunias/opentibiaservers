import OlderaCustomMapServerNorthAmericaKeywordPage, { generateMetadata } from './oldera-custom-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaCustomMapServerNorthAmericaKeywordPage />;
}
