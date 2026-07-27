import RealMapCanobLoginKeywordPage, { generateMetadata } from './real-map-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobLoginKeywordPage />;
}
