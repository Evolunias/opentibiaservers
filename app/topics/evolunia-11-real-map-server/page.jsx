import Evolunia11RealMapServerKeywordPage, { generateMetadata } from './evolunia-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia11RealMapServerKeywordPage />;
}
