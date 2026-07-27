import Shadowcores13RealMapServerKeywordPage, { generateMetadata } from './shadowcores-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13RealMapServerKeywordPage />;
}
