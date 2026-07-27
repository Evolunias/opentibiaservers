import Tibiascape15CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15CustomMapServerKeywordPage />;
}
