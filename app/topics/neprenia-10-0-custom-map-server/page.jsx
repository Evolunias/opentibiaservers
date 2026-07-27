import Neprenia100CustomMapServerKeywordPage, { generateMetadata } from './neprenia-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia100CustomMapServerKeywordPage />;
}
