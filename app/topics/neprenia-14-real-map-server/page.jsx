import Neprenia14RealMapServerKeywordPage, { generateMetadata } from './neprenia-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14RealMapServerKeywordPage />;
}
