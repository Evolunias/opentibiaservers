import Canob96RealMapServerKeywordPage, { generateMetadata } from './canob-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob96RealMapServerKeywordPage />;
}
