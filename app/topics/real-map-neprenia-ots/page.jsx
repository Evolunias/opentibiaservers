import RealMapNepreniaOtsKeywordPage, { generateMetadata } from './real-map-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaOtsKeywordPage />;
}
