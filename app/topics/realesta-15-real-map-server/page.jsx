import Realesta15RealMapServerKeywordPage, { generateMetadata } from './realesta-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta15RealMapServerKeywordPage />;
}
