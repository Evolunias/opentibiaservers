import Tibianus81CustomMapServerKeywordPage, { generateMetadata } from './tibianus-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus81CustomMapServerKeywordPage />;
}
