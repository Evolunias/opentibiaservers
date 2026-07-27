import AlasteraCustomMapServersBrazilKeywordPage, { generateMetadata } from './alastera-custom-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraCustomMapServersBrazilKeywordPage />;
}
