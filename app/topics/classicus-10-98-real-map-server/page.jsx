import Classicus1098RealMapServerKeywordPage, { generateMetadata } from './classicus-10-98-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098RealMapServerKeywordPage />;
}
