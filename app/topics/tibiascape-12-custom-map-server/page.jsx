import Tibiascape12CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12CustomMapServerKeywordPage />;
}
