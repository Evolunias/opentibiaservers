import RealMapLumineraOtsKeywordPage, { generateMetadata } from './real-map-luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraOtsKeywordPage />;
}
