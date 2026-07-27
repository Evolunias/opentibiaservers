import Midhem80RealMapServerKeywordPage, { generateMetadata } from './midhem-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80RealMapServerKeywordPage />;
}
