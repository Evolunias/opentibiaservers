import RealMapBlazeraOtKeywordPage, { generateMetadata } from './real-map-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraOtKeywordPage />;
}
