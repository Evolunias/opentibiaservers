import Tibiascape81CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape81CustomMapServerKeywordPage />;
}
