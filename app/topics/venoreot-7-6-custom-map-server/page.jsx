import Venoreot76CustomMapServerKeywordPage, { generateMetadata } from './venoreot-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot76CustomMapServerKeywordPage />;
}
