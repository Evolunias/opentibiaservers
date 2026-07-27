import Tibiaorigins13CustomMapServerKeywordPage, { generateMetadata } from './tibiaorigins-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins13CustomMapServerKeywordPage />;
}
