import Realera13RealMapServerKeywordPage, { generateMetadata } from './realera-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13RealMapServerKeywordPage />;
}
