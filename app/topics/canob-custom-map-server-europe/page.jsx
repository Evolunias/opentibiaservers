import CanobCustomMapServerEuropeKeywordPage, { generateMetadata } from './canob-custom-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCustomMapServerEuropeKeywordPage />;
}
