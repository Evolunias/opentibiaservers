import NepreniaCustomMapServerArgentinaKeywordPage, { generateMetadata } from './neprenia-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaCustomMapServerArgentinaKeywordPage />;
}
