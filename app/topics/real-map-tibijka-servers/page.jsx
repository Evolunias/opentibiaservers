import RealMapTibijkaServersKeywordPage, { generateMetadata } from './real-map-tibijka-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaServersKeywordPage />;
}
