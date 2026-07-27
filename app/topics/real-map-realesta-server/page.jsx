import RealMapRealestaServerKeywordPage, { generateMetadata } from './real-map-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealestaServerKeywordPage />;
}
