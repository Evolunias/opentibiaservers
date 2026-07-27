import Evolera15CustomMapServerKeywordPage, { generateMetadata } from './evolera-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera15CustomMapServerKeywordPage />;
}
