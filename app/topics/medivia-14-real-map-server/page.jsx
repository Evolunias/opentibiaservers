import Medivia14RealMapServerKeywordPage, { generateMetadata } from './medivia-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14RealMapServerKeywordPage />;
}
