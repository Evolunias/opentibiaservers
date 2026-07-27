import Nilot11RealMapServerKeywordPage, { generateMetadata } from './nilot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot11RealMapServerKeywordPage />;
}
