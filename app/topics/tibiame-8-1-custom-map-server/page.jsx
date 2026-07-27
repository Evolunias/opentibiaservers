import Tibiame81CustomMapServerKeywordPage, { generateMetadata } from './tibiame-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame81CustomMapServerKeywordPage />;
}
