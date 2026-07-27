import Thornia84RealMapServerKeywordPage, { generateMetadata } from './thornia-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84RealMapServerKeywordPage />;
}
