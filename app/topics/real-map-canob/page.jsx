import RealMapCanobKeywordPage, { generateMetadata } from './real-map-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobKeywordPage />;
}
