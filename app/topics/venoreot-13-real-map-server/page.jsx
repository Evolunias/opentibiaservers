import Venoreot13RealMapServerKeywordPage, { generateMetadata } from './venoreot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13RealMapServerKeywordPage />;
}
