import Neprenia76CustomMapServerKeywordPage, { generateMetadata } from './neprenia-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia76CustomMapServerKeywordPage />;
}
