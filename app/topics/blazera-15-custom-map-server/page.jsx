import Blazera15CustomMapServerKeywordPage, { generateMetadata } from './blazera-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15CustomMapServerKeywordPage />;
}
