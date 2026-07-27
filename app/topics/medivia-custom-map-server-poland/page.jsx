import MediviaCustomMapServerPolandKeywordPage, { generateMetadata } from './medivia-custom-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCustomMapServerPolandKeywordPage />;
}
