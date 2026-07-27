import RealMapTibiaraKeywordPage, { generateMetadata } from './real-map-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraKeywordPage />;
}
