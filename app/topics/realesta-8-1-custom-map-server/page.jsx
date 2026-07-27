import Realesta81CustomMapServerKeywordPage, { generateMetadata } from './realesta-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta81CustomMapServerKeywordPage />;
}
