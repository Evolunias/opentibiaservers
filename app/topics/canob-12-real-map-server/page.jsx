import Canob12RealMapServerKeywordPage, { generateMetadata } from './canob-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12RealMapServerKeywordPage />;
}
