import Venoreot15CustomMapServerKeywordPage, { generateMetadata } from './venoreot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15CustomMapServerKeywordPage />;
}
