import RealMapInfernalOtServerKeywordPage, { generateMetadata } from './real-map-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapInfernalOtServerKeywordPage />;
}
