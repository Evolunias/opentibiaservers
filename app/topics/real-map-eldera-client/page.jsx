import RealMapElderaClientKeywordPage, { generateMetadata } from './real-map-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaClientKeywordPage />;
}
