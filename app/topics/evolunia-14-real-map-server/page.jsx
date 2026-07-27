import Evolunia14RealMapServerKeywordPage, { generateMetadata } from './evolunia-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia14RealMapServerKeywordPage />;
}
