import Venoreot14RealMapServerKeywordPage, { generateMetadata } from './venoreot-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14RealMapServerKeywordPage />;
}
