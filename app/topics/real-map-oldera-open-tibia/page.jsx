import RealMapOlderaOpenTibiaKeywordPage, { generateMetadata } from './real-map-oldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaOpenTibiaKeywordPage />;
}
