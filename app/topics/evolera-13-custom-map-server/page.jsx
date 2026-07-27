import Evolera13CustomMapServerKeywordPage, { generateMetadata } from './evolera-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera13CustomMapServerKeywordPage />;
}
