import RealMapInfernalOtKeywordPage, { generateMetadata } from './real-map-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapInfernalOtKeywordPage />;
}
