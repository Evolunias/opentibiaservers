import Thaisot80RealMapServerKeywordPage, { generateMetadata } from './thaisot-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot80RealMapServerKeywordPage />;
}
