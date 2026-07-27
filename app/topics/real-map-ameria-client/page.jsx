import RealMapAmeriaClientKeywordPage, { generateMetadata } from './real-map-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaClientKeywordPage />;
}
