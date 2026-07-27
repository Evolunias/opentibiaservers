import RealMapCanobOtKeywordPage, { generateMetadata } from './real-map-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobOtKeywordPage />;
}
