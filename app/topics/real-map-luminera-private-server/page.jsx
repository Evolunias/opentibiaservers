import RealMapLumineraPrivateServerKeywordPage, { generateMetadata } from './real-map-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraPrivateServerKeywordPage />;
}
