import Realesta80CustomMapServerKeywordPage, { generateMetadata } from './realesta-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta80CustomMapServerKeywordPage />;
}
