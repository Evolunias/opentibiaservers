import Venoreot13CustomMapServerKeywordPage, { generateMetadata } from './venoreot-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13CustomMapServerKeywordPage />;
}
