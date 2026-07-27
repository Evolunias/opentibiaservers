import Tibianus96CustomMapServerKeywordPage, { generateMetadata } from './tibianus-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus96CustomMapServerKeywordPage />;
}
