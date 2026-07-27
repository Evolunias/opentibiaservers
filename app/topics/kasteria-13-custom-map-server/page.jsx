import Kasteria13CustomMapServerKeywordPage, { generateMetadata } from './kasteria-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13CustomMapServerKeywordPage />;
}
