import NepreniaCustomMapServerPolandKeywordPage, { generateMetadata } from './neprenia-custom-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaCustomMapServerPolandKeywordPage />;
}
