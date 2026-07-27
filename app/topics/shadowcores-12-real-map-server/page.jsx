import Shadowcores12RealMapServerKeywordPage, { generateMetadata } from './shadowcores-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12RealMapServerKeywordPage />;
}
