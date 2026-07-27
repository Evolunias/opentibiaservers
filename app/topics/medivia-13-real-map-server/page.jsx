import Medivia13RealMapServerKeywordPage, { generateMetadata } from './medivia-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13RealMapServerKeywordPage />;
}
