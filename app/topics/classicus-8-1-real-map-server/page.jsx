import Classicus81RealMapServerKeywordPage, { generateMetadata } from './classicus-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81RealMapServerKeywordPage />;
}
