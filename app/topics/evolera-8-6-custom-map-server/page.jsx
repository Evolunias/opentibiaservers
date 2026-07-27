import Evolera86CustomMapServerKeywordPage, { generateMetadata } from './evolera-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera86CustomMapServerKeywordPage />;
}
