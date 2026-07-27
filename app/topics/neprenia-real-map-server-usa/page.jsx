import NepreniaRealMapServerUsaKeywordPage, { generateMetadata } from './neprenia-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRealMapServerUsaKeywordPage />;
}
