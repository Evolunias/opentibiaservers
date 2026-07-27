import Midhem71RealMapServerKeywordPage, { generateMetadata } from './midhem-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71RealMapServerKeywordPage />;
}
