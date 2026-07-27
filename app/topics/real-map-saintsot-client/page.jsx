import RealMapSaintsotClientKeywordPage, { generateMetadata } from './real-map-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSaintsotClientKeywordPage />;
}
