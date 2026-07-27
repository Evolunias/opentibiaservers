import Eldera11CustomMapServerKeywordPage, { generateMetadata } from './eldera-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11CustomMapServerKeywordPage />;
}
