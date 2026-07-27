import Coxaot14RealMapServerKeywordPage, { generateMetadata } from './coxaot-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14RealMapServerKeywordPage />;
}
