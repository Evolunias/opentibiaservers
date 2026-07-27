import Medivia11CustomMapServerKeywordPage, { generateMetadata } from './medivia-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11CustomMapServerKeywordPage />;
}
