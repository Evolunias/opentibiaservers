import Thaisot14RealMapServerKeywordPage, { generateMetadata } from './thaisot-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14RealMapServerKeywordPage />;
}
