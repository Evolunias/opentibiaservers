import Coxaot11RealMapServerKeywordPage, { generateMetadata } from './coxaot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11RealMapServerKeywordPage />;
}
