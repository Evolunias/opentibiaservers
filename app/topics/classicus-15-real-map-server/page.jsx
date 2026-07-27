import Classicus15RealMapServerKeywordPage, { generateMetadata } from './classicus-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15RealMapServerKeywordPage />;
}
