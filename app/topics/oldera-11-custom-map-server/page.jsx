import Oldera11CustomMapServerKeywordPage, { generateMetadata } from './oldera-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11CustomMapServerKeywordPage />;
}
