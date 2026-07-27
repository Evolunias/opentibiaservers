import Medivia80CustomMapServerKeywordPage, { generateMetadata } from './medivia-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia80CustomMapServerKeywordPage />;
}
