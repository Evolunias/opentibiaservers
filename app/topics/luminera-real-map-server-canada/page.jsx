import LumineraRealMapServerCanadaKeywordPage, { generateMetadata } from './luminera-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraRealMapServerCanadaKeywordPage />;
}
