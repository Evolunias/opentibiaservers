import Neprenia81CustomMapServerKeywordPage, { generateMetadata } from './neprenia-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia81CustomMapServerKeywordPage />;
}
