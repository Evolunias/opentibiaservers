import Thornia12RealMapServerKeywordPage, { generateMetadata } from './thornia-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12RealMapServerKeywordPage />;
}
