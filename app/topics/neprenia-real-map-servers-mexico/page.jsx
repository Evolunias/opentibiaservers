import NepreniaRealMapServersMexicoKeywordPage, { generateMetadata } from './neprenia-real-map-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRealMapServersMexicoKeywordPage />;
}
