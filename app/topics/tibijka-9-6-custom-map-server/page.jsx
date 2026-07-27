import Tibijka96CustomMapServerKeywordPage, { generateMetadata } from './tibijka-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka96CustomMapServerKeywordPage />;
}
