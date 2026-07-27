import Eldera84CustomMapServerKeywordPage, { generateMetadata } from './eldera-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera84CustomMapServerKeywordPage />;
}
