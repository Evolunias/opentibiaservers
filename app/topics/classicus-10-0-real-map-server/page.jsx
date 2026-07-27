import Classicus100RealMapServerKeywordPage, { generateMetadata } from './classicus-10-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100RealMapServerKeywordPage />;
}
