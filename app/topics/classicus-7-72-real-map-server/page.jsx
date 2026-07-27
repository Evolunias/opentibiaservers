import Classicus772RealMapServerKeywordPage, { generateMetadata } from './classicus-7-72-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus772RealMapServerKeywordPage />;
}
