import Midhem12RealMapServerKeywordPage, { generateMetadata } from './midhem-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12RealMapServerKeywordPage />;
}
