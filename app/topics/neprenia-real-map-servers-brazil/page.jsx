import NepreniaRealMapServersBrazilKeywordPage, { generateMetadata } from './neprenia-real-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRealMapServersBrazilKeywordPage />;
}
