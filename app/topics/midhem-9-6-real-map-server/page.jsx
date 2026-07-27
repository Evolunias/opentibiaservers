import Midhem96RealMapServerKeywordPage, { generateMetadata } from './midhem-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96RealMapServerKeywordPage />;
}
