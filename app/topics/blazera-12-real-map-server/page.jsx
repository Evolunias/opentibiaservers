import Blazera12RealMapServerKeywordPage, { generateMetadata } from './blazera-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12RealMapServerKeywordPage />;
}
