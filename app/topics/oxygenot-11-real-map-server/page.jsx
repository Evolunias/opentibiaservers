import Oxygenot11RealMapServerKeywordPage, { generateMetadata } from './oxygenot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot11RealMapServerKeywordPage />;
}
