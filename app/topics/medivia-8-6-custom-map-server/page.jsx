import Medivia86CustomMapServerKeywordPage, { generateMetadata } from './medivia-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia86CustomMapServerKeywordPage />;
}
