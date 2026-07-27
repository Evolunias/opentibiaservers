import Medivia12RealMapServerKeywordPage, { generateMetadata } from './medivia-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12RealMapServerKeywordPage />;
}
