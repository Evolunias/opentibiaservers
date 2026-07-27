import Oldera76CustomMapServerKeywordPage, { generateMetadata } from './oldera-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera76CustomMapServerKeywordPage />;
}
