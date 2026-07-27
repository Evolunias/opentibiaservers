import RealMapThorniaOtServerKeywordPage, { generateMetadata } from './real-map-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaOtServerKeywordPage />;
}
