import Realera15RealMapServerKeywordPage, { generateMetadata } from './realera-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15RealMapServerKeywordPage />;
}
