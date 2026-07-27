import Evolunia96RealMapServerKeywordPage, { generateMetadata } from './evolunia-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia96RealMapServerKeywordPage />;
}
