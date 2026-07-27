import Thaisot96RealMapServerKeywordPage, { generateMetadata } from './thaisot-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot96RealMapServerKeywordPage />;
}
