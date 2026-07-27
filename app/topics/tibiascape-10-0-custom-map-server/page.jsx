import Tibiascape100CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape100CustomMapServerKeywordPage />;
}
