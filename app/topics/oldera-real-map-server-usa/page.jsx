import OlderaRealMapServerUsaKeywordPage, { generateMetadata } from './oldera-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRealMapServerUsaKeywordPage />;
}
