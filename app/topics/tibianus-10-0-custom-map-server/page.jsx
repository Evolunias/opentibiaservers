import Tibianus100CustomMapServerKeywordPage, { generateMetadata } from './tibianus-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus100CustomMapServerKeywordPage />;
}
