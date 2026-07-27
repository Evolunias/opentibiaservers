import RealMapBlazeraOtsKeywordPage, { generateMetadata } from './real-map-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraOtsKeywordPage />;
}
