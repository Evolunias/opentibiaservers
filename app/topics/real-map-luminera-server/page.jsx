import RealMapLumineraServerKeywordPage, { generateMetadata } from './real-map-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraServerKeywordPage />;
}
