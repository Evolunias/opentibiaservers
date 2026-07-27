import Medivia100CustomMapServerKeywordPage, { generateMetadata } from './medivia-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia100CustomMapServerKeywordPage />;
}
