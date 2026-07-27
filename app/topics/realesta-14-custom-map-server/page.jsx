import Realesta14CustomMapServerKeywordPage, { generateMetadata } from './realesta-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta14CustomMapServerKeywordPage />;
}
