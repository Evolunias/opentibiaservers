import RealMapCanobClientKeywordPage, { generateMetadata } from './real-map-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobClientKeywordPage />;
}
