import CanobCustomMapServerUkKeywordPage, { generateMetadata } from './canob-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCustomMapServerUkKeywordPage />;
}
