import Midhem81RealMapServerKeywordPage, { generateMetadata } from './midhem-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81RealMapServerKeywordPage />;
}
