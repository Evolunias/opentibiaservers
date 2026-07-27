import RealMapSaintsotServerKeywordPage, { generateMetadata } from './real-map-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSaintsotServerKeywordPage />;
}
