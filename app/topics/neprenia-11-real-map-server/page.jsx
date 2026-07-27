import Neprenia11RealMapServerKeywordPage, { generateMetadata } from './neprenia-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11RealMapServerKeywordPage />;
}
