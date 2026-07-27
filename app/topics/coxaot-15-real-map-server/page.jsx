import Coxaot15RealMapServerKeywordPage, { generateMetadata } from './coxaot-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15RealMapServerKeywordPage />;
}
