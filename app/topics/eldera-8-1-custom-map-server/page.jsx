import Eldera81CustomMapServerKeywordPage, { generateMetadata } from './eldera-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera81CustomMapServerKeywordPage />;
}
