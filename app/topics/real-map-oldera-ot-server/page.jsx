import RealMapOlderaOtServerKeywordPage, { generateMetadata } from './real-map-oldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaOtServerKeywordPage />;
}
