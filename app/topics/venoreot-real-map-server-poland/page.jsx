import VenoreotRealMapServerPolandKeywordPage, { generateMetadata } from './venoreot-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRealMapServerPolandKeywordPage />;
}
