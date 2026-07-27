import RealMapOxygenotKeywordPage, { generateMetadata } from './real-map-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotKeywordPage />;
}
