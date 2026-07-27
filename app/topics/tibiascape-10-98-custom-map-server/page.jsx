import Tibiascape1098CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-10-98-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape1098CustomMapServerKeywordPage />;
}
