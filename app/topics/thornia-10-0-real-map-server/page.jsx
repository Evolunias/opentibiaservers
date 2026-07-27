import Thornia100RealMapServerKeywordPage, { generateMetadata } from './thornia-10-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia100RealMapServerKeywordPage />;
}
