import RealMapThaisotOtServerKeywordPage, { generateMetadata } from './real-map-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotOtServerKeywordPage />;
}
