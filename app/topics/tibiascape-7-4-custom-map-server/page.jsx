import Tibiascape74CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape74CustomMapServerKeywordPage />;
}
