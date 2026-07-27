import Venoreot12RealMapServerKeywordPage, { generateMetadata } from './venoreot-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12RealMapServerKeywordPage />;
}
