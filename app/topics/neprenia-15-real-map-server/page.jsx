import Neprenia15RealMapServerKeywordPage, { generateMetadata } from './neprenia-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15RealMapServerKeywordPage />;
}
