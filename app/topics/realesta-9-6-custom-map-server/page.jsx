import Realesta96CustomMapServerKeywordPage, { generateMetadata } from './realesta-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta96CustomMapServerKeywordPage />;
}
