import Medivia11RealMapServerKeywordPage, { generateMetadata } from './medivia-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11RealMapServerKeywordPage />;
}
