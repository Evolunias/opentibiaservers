import VenoreotCustomMapServerPolandKeywordPage, { generateMetadata } from './venoreot-custom-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotCustomMapServerPolandKeywordPage />;
}
