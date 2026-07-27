import RealMapNepreniaPrivateServerKeywordPage, { generateMetadata } from './real-map-neprenia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaPrivateServerKeywordPage />;
}
