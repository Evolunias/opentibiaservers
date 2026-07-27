import RealMapBlazeraKeywordPage, { generateMetadata } from './real-map-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraKeywordPage />;
}
