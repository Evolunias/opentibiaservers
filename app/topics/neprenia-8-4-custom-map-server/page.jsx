import Neprenia84CustomMapServerKeywordPage, { generateMetadata } from './neprenia-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia84CustomMapServerKeywordPage />;
}
