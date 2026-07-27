import Neprenia13RealMapServerKeywordPage, { generateMetadata } from './neprenia-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13RealMapServerKeywordPage />;
}
