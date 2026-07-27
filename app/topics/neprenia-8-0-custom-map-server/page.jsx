import Neprenia80CustomMapServerKeywordPage, { generateMetadata } from './neprenia-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia80CustomMapServerKeywordPage />;
}
