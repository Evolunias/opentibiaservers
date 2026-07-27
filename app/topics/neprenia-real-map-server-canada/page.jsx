import NepreniaRealMapServerCanadaKeywordPage, { generateMetadata } from './neprenia-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRealMapServerCanadaKeywordPage />;
}
