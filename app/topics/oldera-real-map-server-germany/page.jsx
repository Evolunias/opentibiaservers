import OlderaRealMapServerGermanyKeywordPage, { generateMetadata } from './oldera-real-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRealMapServerGermanyKeywordPage />;
}
