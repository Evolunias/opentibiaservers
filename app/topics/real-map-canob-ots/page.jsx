import RealMapCanobOtsKeywordPage, { generateMetadata } from './real-map-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobOtsKeywordPage />;
}
