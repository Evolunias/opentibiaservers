import CanobCustomMapServerNorthAmericaKeywordPage, { generateMetadata } from './canob-custom-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCustomMapServerNorthAmericaKeywordPage />;
}
