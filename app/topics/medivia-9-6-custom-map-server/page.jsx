import Medivia96CustomMapServerKeywordPage, { generateMetadata } from './medivia-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96CustomMapServerKeywordPage />;
}
