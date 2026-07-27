import Tibiascape13CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13CustomMapServerKeywordPage />;
}
