import Eldera12RealMapServerKeywordPage, { generateMetadata } from './eldera-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12RealMapServerKeywordPage />;
}
