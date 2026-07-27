import Blazera11RealMapServerKeywordPage, { generateMetadata } from './blazera-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11RealMapServerKeywordPage />;
}
