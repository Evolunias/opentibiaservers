import Midhem14RealMapServerKeywordPage, { generateMetadata } from './midhem-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14RealMapServerKeywordPage />;
}
