import Tibiascape84CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape84CustomMapServerKeywordPage />;
}
