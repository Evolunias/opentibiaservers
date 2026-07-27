import RealMapLumineraOtKeywordPage, { generateMetadata } from './real-map-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraOtKeywordPage />;
}
