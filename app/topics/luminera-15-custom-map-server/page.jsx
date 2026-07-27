import Luminera15CustomMapServerKeywordPage, { generateMetadata } from './luminera-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15CustomMapServerKeywordPage />;
}
