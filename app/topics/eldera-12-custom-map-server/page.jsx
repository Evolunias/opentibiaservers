import Eldera12CustomMapServerKeywordPage, { generateMetadata } from './eldera-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12CustomMapServerKeywordPage />;
}
