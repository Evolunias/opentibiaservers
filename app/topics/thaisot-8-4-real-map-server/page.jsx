import Thaisot84RealMapServerKeywordPage, { generateMetadata } from './thaisot-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot84RealMapServerKeywordPage />;
}
