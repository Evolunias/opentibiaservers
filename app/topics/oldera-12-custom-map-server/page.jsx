import Oldera12CustomMapServerKeywordPage, { generateMetadata } from './oldera-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12CustomMapServerKeywordPage />;
}
