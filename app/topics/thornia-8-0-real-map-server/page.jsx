import Thornia80RealMapServerKeywordPage, { generateMetadata } from './thornia-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80RealMapServerKeywordPage />;
}
