import Thaisot13RealMapServerKeywordPage, { generateMetadata } from './thaisot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13RealMapServerKeywordPage />;
}
