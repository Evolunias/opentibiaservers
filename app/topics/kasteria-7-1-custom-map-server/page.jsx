import Kasteria71CustomMapServerKeywordPage, { generateMetadata } from './kasteria-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria71CustomMapServerKeywordPage />;
}
