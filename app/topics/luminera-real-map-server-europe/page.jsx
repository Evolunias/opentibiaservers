import LumineraRealMapServerEuropeKeywordPage, { generateMetadata } from './luminera-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraRealMapServerEuropeKeywordPage />;
}
