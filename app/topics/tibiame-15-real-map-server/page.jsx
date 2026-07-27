import Tibiame15RealMapServerKeywordPage, { generateMetadata } from './tibiame-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15RealMapServerKeywordPage />;
}
