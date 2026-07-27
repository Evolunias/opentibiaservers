import RealMapOlderaServerKeywordPage, { generateMetadata } from './real-map-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaServerKeywordPage />;
}
