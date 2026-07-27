import Kasteria11CustomMapServerKeywordPage, { generateMetadata } from './kasteria-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11CustomMapServerKeywordPage />;
}
