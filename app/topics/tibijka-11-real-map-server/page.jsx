import Tibijka11RealMapServerKeywordPage, { generateMetadata } from './tibijka-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11RealMapServerKeywordPage />;
}
