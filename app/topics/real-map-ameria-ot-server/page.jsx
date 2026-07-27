import RealMapAmeriaOtServerKeywordPage, { generateMetadata } from './real-map-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaOtServerKeywordPage />;
}
