import Midhem13RealMapServerKeywordPage, { generateMetadata } from './midhem-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13RealMapServerKeywordPage />;
}
