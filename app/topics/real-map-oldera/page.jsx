import RealMapOlderaKeywordPage, { generateMetadata } from './real-map-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaKeywordPage />;
}
