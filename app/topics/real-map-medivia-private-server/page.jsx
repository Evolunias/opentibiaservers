import RealMapMediviaPrivateServerKeywordPage, { generateMetadata } from './real-map-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaPrivateServerKeywordPage />;
}
