import RealMapCanobServersKeywordPage, { generateMetadata } from './real-map-canob-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobServersKeywordPage />;
}
