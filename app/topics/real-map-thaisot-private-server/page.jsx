import RealMapThaisotPrivateServerKeywordPage, { generateMetadata } from './real-map-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotPrivateServerKeywordPage />;
}
