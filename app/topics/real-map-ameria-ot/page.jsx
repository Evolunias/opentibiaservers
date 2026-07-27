import RealMapAmeriaOtKeywordPage, { generateMetadata } from './real-map-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaOtKeywordPage />;
}
