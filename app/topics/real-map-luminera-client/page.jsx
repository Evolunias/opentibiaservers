import RealMapLumineraClientKeywordPage, { generateMetadata } from './real-map-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraClientKeywordPage />;
}
