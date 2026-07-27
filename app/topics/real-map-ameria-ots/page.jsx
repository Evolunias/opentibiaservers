import RealMapAmeriaOtsKeywordPage, { generateMetadata } from './real-map-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaOtsKeywordPage />;
}
