import Venoreot15RealMapServerKeywordPage, { generateMetadata } from './venoreot-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15RealMapServerKeywordPage />;
}
