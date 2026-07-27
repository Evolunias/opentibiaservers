import RealMapAmeriaLoginKeywordPage, { generateMetadata } from './real-map-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaLoginKeywordPage />;
}
