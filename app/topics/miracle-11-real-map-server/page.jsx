import Miracle11RealMapServerKeywordPage, { generateMetadata } from './miracle-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle11RealMapServerKeywordPage />;
}
