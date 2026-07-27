import Neprenia71RealMapServerKeywordPage, { generateMetadata } from './neprenia-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia71RealMapServerKeywordPage />;
}
