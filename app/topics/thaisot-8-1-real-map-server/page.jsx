import Thaisot81RealMapServerKeywordPage, { generateMetadata } from './thaisot-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81RealMapServerKeywordPage />;
}
