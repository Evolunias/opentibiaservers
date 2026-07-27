import RealMapMidhemPrivateServerKeywordPage, { generateMetadata } from './real-map-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemPrivateServerKeywordPage />;
}
