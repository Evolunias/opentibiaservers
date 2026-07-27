import OlderaCustomMapServerUsaKeywordPage, { generateMetadata } from './oldera-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaCustomMapServerUsaKeywordPage />;
}
