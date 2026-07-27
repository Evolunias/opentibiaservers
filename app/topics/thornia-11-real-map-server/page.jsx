import Thornia11RealMapServerKeywordPage, { generateMetadata } from './thornia-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11RealMapServerKeywordPage />;
}
