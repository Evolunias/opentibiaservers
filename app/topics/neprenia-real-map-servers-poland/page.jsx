import NepreniaRealMapServersPolandKeywordPage, { generateMetadata } from './neprenia-real-map-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRealMapServersPolandKeywordPage />;
}
