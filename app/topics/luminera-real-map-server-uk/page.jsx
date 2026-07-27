import LumineraRealMapServerUkKeywordPage, { generateMetadata } from './luminera-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraRealMapServerUkKeywordPage />;
}
