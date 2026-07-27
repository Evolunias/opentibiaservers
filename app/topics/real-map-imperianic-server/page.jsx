import RealMapImperianicServerKeywordPage, { generateMetadata } from './real-map-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicServerKeywordPage />;
}
