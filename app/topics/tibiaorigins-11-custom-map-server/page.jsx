import Tibiaorigins11CustomMapServerKeywordPage, { generateMetadata } from './tibiaorigins-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins11CustomMapServerKeywordPage />;
}
