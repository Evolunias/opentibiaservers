import RealMapRealeraKeywordPage, { generateMetadata } from './real-map-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealeraKeywordPage />;
}
