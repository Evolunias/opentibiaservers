import Midhem11RealMapServerKeywordPage, { generateMetadata } from './midhem-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11RealMapServerKeywordPage />;
}
