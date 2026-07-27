import Classicus74RealMapServerKeywordPage, { generateMetadata } from './classicus-7-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74RealMapServerKeywordPage />;
}
