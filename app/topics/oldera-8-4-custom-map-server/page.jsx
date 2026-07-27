import Oldera84CustomMapServerKeywordPage, { generateMetadata } from './oldera-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera84CustomMapServerKeywordPage />;
}
