import Realesta15CustomMapServerKeywordPage, { generateMetadata } from './realesta-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta15CustomMapServerKeywordPage />;
}
