import RealMapCanobServerKeywordPage, { generateMetadata } from './real-map-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobServerKeywordPage />;
}
