import Venoreot86CustomMapServerKeywordPage, { generateMetadata } from './venoreot-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot86CustomMapServerKeywordPage />;
}
