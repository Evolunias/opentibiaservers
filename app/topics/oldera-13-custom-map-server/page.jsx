import Oldera13CustomMapServerKeywordPage, { generateMetadata } from './oldera-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13CustomMapServerKeywordPage />;
}
