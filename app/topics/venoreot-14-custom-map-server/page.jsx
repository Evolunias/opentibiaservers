import Venoreot14CustomMapServerKeywordPage, { generateMetadata } from './venoreot-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14CustomMapServerKeywordPage />;
}
