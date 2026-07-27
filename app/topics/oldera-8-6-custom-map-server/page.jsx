import Oldera86CustomMapServerKeywordPage, { generateMetadata } from './oldera-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86CustomMapServerKeywordPage />;
}
