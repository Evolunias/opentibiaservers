import Blazera15RealMapServerKeywordPage, { generateMetadata } from './blazera-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15RealMapServerKeywordPage />;
}
