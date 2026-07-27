import Neprenia96CustomMapServerKeywordPage, { generateMetadata } from './neprenia-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96CustomMapServerKeywordPage />;
}
