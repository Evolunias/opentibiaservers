import Neprenia96RealMapServerKeywordPage, { generateMetadata } from './neprenia-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96RealMapServerKeywordPage />;
}
