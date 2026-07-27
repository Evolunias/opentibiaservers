import Tibiaorigins15CustomMapServerKeywordPage, { generateMetadata } from './tibiaorigins-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins15CustomMapServerKeywordPage />;
}
