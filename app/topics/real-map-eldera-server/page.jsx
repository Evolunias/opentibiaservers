import RealMapElderaServerKeywordPage, { generateMetadata } from './real-map-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaServerKeywordPage />;
}
