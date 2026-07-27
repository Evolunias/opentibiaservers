import Realera12RealMapServerKeywordPage, { generateMetadata } from './realera-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12RealMapServerKeywordPage />;
}
