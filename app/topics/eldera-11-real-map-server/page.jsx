import Eldera11RealMapServerKeywordPage, { generateMetadata } from './eldera-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11RealMapServerKeywordPage />;
}
