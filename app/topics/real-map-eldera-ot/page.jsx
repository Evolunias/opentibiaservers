import RealMapElderaOtKeywordPage, { generateMetadata } from './real-map-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaOtKeywordPage />;
}
