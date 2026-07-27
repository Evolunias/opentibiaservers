import RealMapDemolidoresClientKeywordPage, { generateMetadata } from './real-map-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDemolidoresClientKeywordPage />;
}
