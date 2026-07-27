import Evolera15RealMapServerKeywordPage, { generateMetadata } from './evolera-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera15RealMapServerKeywordPage />;
}
