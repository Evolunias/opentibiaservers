import Neprenia11CustomMapServerKeywordPage, { generateMetadata } from './neprenia-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11CustomMapServerKeywordPage />;
}
