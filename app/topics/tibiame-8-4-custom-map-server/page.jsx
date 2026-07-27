import Tibiame84CustomMapServerKeywordPage, { generateMetadata } from './tibiame-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame84CustomMapServerKeywordPage />;
}
