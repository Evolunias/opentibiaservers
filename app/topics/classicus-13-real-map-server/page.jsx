import Classicus13RealMapServerKeywordPage, { generateMetadata } from './classicus-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13RealMapServerKeywordPage />;
}
