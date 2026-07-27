import RealMapLumineraOtServerKeywordPage, { generateMetadata } from './real-map-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraOtServerKeywordPage />;
}
