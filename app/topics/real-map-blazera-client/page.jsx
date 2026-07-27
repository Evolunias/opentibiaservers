import RealMapBlazeraClientKeywordPage, { generateMetadata } from './real-map-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraClientKeywordPage />;
}
