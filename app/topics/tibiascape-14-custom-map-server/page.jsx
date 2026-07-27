import Tibiascape14CustomMapServerKeywordPage, { generateMetadata } from './tibiascape-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14CustomMapServerKeywordPage />;
}
