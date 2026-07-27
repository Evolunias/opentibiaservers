import Classicus14RealMapServerKeywordPage, { generateMetadata } from './classicus-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14RealMapServerKeywordPage />;
}
