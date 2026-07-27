import Oldera15CustomMapServerKeywordPage, { generateMetadata } from './oldera-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15CustomMapServerKeywordPage />;
}
