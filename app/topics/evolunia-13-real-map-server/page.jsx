import Evolunia13RealMapServerKeywordPage, { generateMetadata } from './evolunia-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia13RealMapServerKeywordPage />;
}
