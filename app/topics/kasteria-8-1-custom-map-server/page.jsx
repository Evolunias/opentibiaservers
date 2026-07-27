import Kasteria81CustomMapServerKeywordPage, { generateMetadata } from './kasteria-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria81CustomMapServerKeywordPage />;
}
