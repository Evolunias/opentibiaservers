import Rubinot11RealMapServerKeywordPage, { generateMetadata } from './rubinot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11RealMapServerKeywordPage />;
}
