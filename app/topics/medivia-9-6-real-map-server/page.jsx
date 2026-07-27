import Medivia96RealMapServerKeywordPage, { generateMetadata } from './medivia-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96RealMapServerKeywordPage />;
}
