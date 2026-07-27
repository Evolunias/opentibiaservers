import Kasteria80CustomMapServerKeywordPage, { generateMetadata } from './kasteria-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80CustomMapServerKeywordPage />;
}
