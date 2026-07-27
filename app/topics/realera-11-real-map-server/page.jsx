import Realera11RealMapServerKeywordPage, { generateMetadata } from './realera-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11RealMapServerKeywordPage />;
}
