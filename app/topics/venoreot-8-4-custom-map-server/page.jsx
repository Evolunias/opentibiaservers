import Venoreot84CustomMapServerKeywordPage, { generateMetadata } from './venoreot-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot84CustomMapServerKeywordPage />;
}
