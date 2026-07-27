import Realesta12CustomMapServerKeywordPage, { generateMetadata } from './realesta-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12CustomMapServerKeywordPage />;
}
