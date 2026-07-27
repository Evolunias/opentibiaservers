import Tibiascape86CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape86CustomMapServerKeywordPage />;
}
