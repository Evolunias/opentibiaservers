import Oldera80CustomMapServerKeywordPage, { generateMetadata } from './oldera-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80CustomMapServerKeywordPage />;
}
