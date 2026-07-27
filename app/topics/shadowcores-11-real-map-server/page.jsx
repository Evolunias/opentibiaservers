import Shadowcores11RealMapServerKeywordPage, { generateMetadata } from './shadowcores-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11RealMapServerKeywordPage />;
}
