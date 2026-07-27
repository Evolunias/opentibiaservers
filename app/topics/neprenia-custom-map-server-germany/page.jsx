import NepreniaCustomMapServerGermanyKeywordPage, { generateMetadata } from './neprenia-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaCustomMapServerGermanyKeywordPage />;
}
