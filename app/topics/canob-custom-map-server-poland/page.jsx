import CanobCustomMapServerPolandKeywordPage, { generateMetadata } from './canob-custom-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCustomMapServerPolandKeywordPage />;
}
