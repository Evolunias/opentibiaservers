import Kasteria74CustomMapServerKeywordPage, { generateMetadata } from './kasteria-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria74CustomMapServerKeywordPage />;
}
