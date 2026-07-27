import Classicus11RealMapServerKeywordPage, { generateMetadata } from './classicus-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11RealMapServerKeywordPage />;
}
