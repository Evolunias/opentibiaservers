import AlasteraCustomMapServerLatinAmericaKeywordPage, { generateMetadata } from './alastera-custom-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraCustomMapServerLatinAmericaKeywordPage />;
}
