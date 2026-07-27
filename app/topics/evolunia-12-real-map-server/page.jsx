import Evolunia12RealMapServerKeywordPage, { generateMetadata } from './evolunia-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12RealMapServerKeywordPage />;
}
