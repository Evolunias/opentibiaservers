import Venoreot71CustomMapServerKeywordPage, { generateMetadata } from './venoreot-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot71CustomMapServerKeywordPage />;
}
