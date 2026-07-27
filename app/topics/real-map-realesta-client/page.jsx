import RealMapRealestaClientKeywordPage, { generateMetadata } from './real-map-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealestaClientKeywordPage />;
}
