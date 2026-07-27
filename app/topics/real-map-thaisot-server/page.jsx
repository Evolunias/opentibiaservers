import RealMapThaisotServerKeywordPage, { generateMetadata } from './real-map-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotServerKeywordPage />;
}
