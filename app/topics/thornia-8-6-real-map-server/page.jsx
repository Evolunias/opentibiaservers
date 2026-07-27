import Thornia86RealMapServerKeywordPage, { generateMetadata } from './thornia-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86RealMapServerKeywordPage />;
}
