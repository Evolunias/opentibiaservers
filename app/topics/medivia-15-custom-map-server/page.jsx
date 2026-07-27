import Medivia15CustomMapServerKeywordPage, { generateMetadata } from './medivia-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15CustomMapServerKeywordPage />;
}
