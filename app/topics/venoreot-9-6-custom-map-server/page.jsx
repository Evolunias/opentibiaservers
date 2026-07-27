import Venoreot96CustomMapServerKeywordPage, { generateMetadata } from './venoreot-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot96CustomMapServerKeywordPage />;
}
