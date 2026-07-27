import KasteriaCustomMapServerSouthAmericaKeywordPage, { generateMetadata } from './kasteria-custom-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaCustomMapServerSouthAmericaKeywordPage />;
}
