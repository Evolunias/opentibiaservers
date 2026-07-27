import Tibijka71CustomMapServerKeywordPage, { generateMetadata } from './tibijka-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka71CustomMapServerKeywordPage />;
}
