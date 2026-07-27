import Medivia14CustomMapServerKeywordPage, { generateMetadata } from './medivia-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14CustomMapServerKeywordPage />;
}
