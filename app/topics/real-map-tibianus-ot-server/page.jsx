import RealMapTibianusOtServerKeywordPage, { generateMetadata } from './real-map-tibianus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusOtServerKeywordPage />;
}
