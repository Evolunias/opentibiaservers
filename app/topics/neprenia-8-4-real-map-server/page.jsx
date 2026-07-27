import Neprenia84RealMapServerKeywordPage, { generateMetadata } from './neprenia-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia84RealMapServerKeywordPage />;
}
