import RealMapKasteriaPrivateServerKeywordPage, { generateMetadata } from './real-map-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaPrivateServerKeywordPage />;
}
