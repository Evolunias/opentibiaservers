import Realesta13RealMapServerKeywordPage, { generateMetadata } from './realesta-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta13RealMapServerKeywordPage />;
}
