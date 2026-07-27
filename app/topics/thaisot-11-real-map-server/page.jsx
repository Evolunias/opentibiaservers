import Thaisot11RealMapServerKeywordPage, { generateMetadata } from './thaisot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11RealMapServerKeywordPage />;
}
