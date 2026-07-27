import RealMapOtServerArgentinaKeywordPage, { generateMetadata } from './real-map-ot-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtServerArgentinaKeywordPage />;
}
