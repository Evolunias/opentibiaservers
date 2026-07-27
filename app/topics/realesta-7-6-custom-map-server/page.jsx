import Realesta76CustomMapServerKeywordPage, { generateMetadata } from './realesta-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta76CustomMapServerKeywordPage />;
}
