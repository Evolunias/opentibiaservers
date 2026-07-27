import RealMapElderaOtsKeywordPage, { generateMetadata } from './real-map-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaOtsKeywordPage />;
}
