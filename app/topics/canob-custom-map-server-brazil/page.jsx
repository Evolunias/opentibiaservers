import CanobCustomMapServerBrazilKeywordPage, { generateMetadata } from './canob-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCustomMapServerBrazilKeywordPage />;
}
