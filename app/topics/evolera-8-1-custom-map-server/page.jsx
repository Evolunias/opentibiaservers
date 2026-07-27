import Evolera81CustomMapServerKeywordPage, { generateMetadata } from './evolera-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera81CustomMapServerKeywordPage />;
}
