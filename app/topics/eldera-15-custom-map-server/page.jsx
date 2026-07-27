import Eldera15CustomMapServerKeywordPage, { generateMetadata } from './eldera-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15CustomMapServerKeywordPage />;
}
