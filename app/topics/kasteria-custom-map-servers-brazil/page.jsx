import KasteriaCustomMapServersBrazilKeywordPage, { generateMetadata } from './kasteria-custom-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaCustomMapServersBrazilKeywordPage />;
}
