import Eldera96CustomMapServerKeywordPage, { generateMetadata } from './eldera-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera96CustomMapServerKeywordPage />;
}
