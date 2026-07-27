import RealMapTibianusOtsKeywordPage, { generateMetadata } from './real-map-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusOtsKeywordPage />;
}
