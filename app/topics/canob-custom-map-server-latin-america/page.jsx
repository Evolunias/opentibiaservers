import CanobCustomMapServerLatinAmericaKeywordPage, { generateMetadata } from './canob-custom-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCustomMapServerLatinAmericaKeywordPage />;
}
