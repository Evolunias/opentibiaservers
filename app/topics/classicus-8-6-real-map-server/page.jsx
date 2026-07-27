import Classicus86RealMapServerKeywordPage, { generateMetadata } from './classicus-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86RealMapServerKeywordPage />;
}
