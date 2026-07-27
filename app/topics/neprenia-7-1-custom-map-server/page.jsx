import Neprenia71CustomMapServerKeywordPage, { generateMetadata } from './neprenia-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia71CustomMapServerKeywordPage />;
}
