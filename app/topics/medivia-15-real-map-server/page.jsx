import Medivia15RealMapServerKeywordPage, { generateMetadata } from './medivia-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15RealMapServerKeywordPage />;
}
