import CanobCustomMapServerGermanyKeywordPage, { generateMetadata } from './canob-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCustomMapServerGermanyKeywordPage />;
}
