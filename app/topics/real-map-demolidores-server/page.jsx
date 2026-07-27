import RealMapDemolidoresServerKeywordPage, { generateMetadata } from './real-map-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDemolidoresServerKeywordPage />;
}
