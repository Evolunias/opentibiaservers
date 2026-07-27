import Shadowcores96RealMapServerKeywordPage, { generateMetadata } from './shadowcores-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores96RealMapServerKeywordPage />;
}
