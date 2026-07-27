import Tibijka12CustomMapServerKeywordPage, { generateMetadata } from './tibijka-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12CustomMapServerKeywordPage />;
}
