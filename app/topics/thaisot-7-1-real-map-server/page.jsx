import Thaisot71RealMapServerKeywordPage, { generateMetadata } from './thaisot-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71RealMapServerKeywordPage />;
}
