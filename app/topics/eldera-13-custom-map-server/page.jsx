import Eldera13CustomMapServerKeywordPage, { generateMetadata } from './eldera-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13CustomMapServerKeywordPage />;
}
