import RealMapImperianicOtServerKeywordPage, { generateMetadata } from './real-map-imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicOtServerKeywordPage />;
}
