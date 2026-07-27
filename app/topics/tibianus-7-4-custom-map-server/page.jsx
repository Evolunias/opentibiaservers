import Tibianus74CustomMapServerKeywordPage, { generateMetadata } from './tibianus-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus74CustomMapServerKeywordPage />;
}
