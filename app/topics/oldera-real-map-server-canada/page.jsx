import OlderaRealMapServerCanadaKeywordPage, { generateMetadata } from './oldera-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRealMapServerCanadaKeywordPage />;
}
