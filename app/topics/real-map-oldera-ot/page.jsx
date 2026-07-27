import RealMapOlderaOtKeywordPage, { generateMetadata } from './real-map-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaOtKeywordPage />;
}
