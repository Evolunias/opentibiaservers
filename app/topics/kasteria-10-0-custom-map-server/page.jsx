import Kasteria100CustomMapServerKeywordPage, { generateMetadata } from './kasteria-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria100CustomMapServerKeywordPage />;
}
